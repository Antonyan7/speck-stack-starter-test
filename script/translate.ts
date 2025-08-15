import * as fs from 'fs'
import {Translator, TargetLanguageCode} from 'deepl-node';


export const translateFfs = async (messagesPath: string) => {
    const jsonFiles = fs.readdirSync(messagesPath).filter(file => file.endsWith('.json'));
    const languageMessages: Record<string, Record<string, string>> = {};
    
    for (const file of jsonFiles) {
        const lang = file.replace('.json', '');
        const content = fs.readFileSync(`${messagesPath}/${file}`, 'utf-8');
        languageMessages[lang] = JSON.parse(content);
    }

    const deepl = new Translator(process.env['DEEPL_API_KEY']!);
    
    // Find all unique message keys across all language files
    const allMessageKeys = new Set<string>();
    for (const lang in languageMessages) {
        Object.keys(languageMessages[lang]).forEach(key => allMessageKeys.add(key));
    }
    
    // For each language, check for missing messages and translate them
    for (const targetLang in languageMessages) {
        const messages = languageMessages[targetLang];
        const missingKeys: string[] = [];
        const sourceMessages: Record<string, string> = {};
        
        // Find missing keys for this language
        for (const key of allMessageKeys) {
            if (!messages[key]) {
                missingKeys.push(key);
                
                // Find a source language that has this message
                for (const sourceLang in languageMessages) {
                    if (sourceLang !== targetLang && languageMessages[sourceLang][key]) {
                        sourceMessages[key] = languageMessages[sourceLang][key];
                        break;
                    }
                }
            }
        }
        
        // Translate missing messages
        if (missingKeys.length > 0) {
            console.log(`Translating ${missingKeys.length} missing messages for ${targetLang}...`);
            
            for (const key of missingKeys) {
                if (sourceMessages[key]) {
                    try {
                        // Map 'en' to 'en-US' for DeepL API
                        const deeplTargetLang = targetLang === 'en' ? 'en-US' : targetLang as TargetLanguageCode;
                        
                        const result = await deepl.translateText(
                            sourceMessages[key],
                            null, // Auto-detect source language
                            deeplTargetLang,
                            { 
                                modelType: 'prefer_quality_optimized',
                                // Prefer quality over speed
                                
                            }
                        );
                        
                        // Add translated message to the language file
                        messages[key] = result.text;
                        
                        // Update the file
                        fs.writeFileSync(
                            `${messagesPath}/${targetLang}.json`,
                            JSON.stringify(messages, null, 2),
                            'utf-8'
                        );
                        
                        console.log(`Translated: ${key} for ${targetLang}`);
                    } catch (error) {
                        console.error(`Error translating ${key} for ${targetLang}:`, error);
                    }
                }
            }
        }
    }
}
translateFfs(`${process.cwd()}/messages`)