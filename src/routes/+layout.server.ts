import { getLocale, locales } from "$lib/paraglide/runtime";
import type { LayoutServerLoad } from "./$types";
import type { HeaderProps } from "./Header.svelte";

export const load: LayoutServerLoad = async (e) => {
    const headerProps: HeaderProps = {
        locale: {
            current: getLocale(),
            available: locales
        }
    }

    return { header: headerProps}
};