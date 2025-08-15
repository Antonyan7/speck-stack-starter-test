
import * as v from 'valibot';
import { m } from "$lib/paraglide/messages";


export const contactSchema = v.object({
    firstName: v.pipe(v.string(), v.nonEmpty(m.keen_left_stingray_nudge())),
    lastName: v.pipe(v.string(), v.nonEmpty(m.fit_great_skate_loop())),
    companyName: v.optional(v.string()),
    email: v.pipe(v.string(), v.nonEmpty(m.warm_sharp_hare_spark()), v.email(m.mushy_even_grizzly_push())),
    phoneNumber: v.optional(v.string()),
    message: v.pipe(v.string(), v.nonEmpty(m.petty_orange_frog_offer())),
})

export type ContactSchema = typeof contactSchema

