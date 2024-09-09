import z from "zod"

const emailSchema = z.object({
    email: z.string().email().regex(/.+\@.+\..+/),
    phone: z.string().regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/),
    name: z.string(),
    subject: z.string(),
    message: z.string(),
})

export default emailSchema