import * as z from "zod";

export const habitSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(100, "El nombre no puede superar los 100 caracteres")
        .regex(
            /^[a-zA-Z\s]+$/,
            "El nombre solo puede contener letras, números y espacios",
        ),

    startDate: z
        .string("Formato incorrecto")
        .min(1, "Selecciona una fecha de inicio"),
});
