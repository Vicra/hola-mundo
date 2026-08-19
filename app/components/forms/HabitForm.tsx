"use client";

import { useState } from "react";
import * as z from "zod";
import { TextField } from "@mui/material";
import { habitSchema } from "../../lib/validations/habit";
import { createHabit } from "@/app/services/habit.service";

const predefinedHabits = [
    {
        id: "water",
        name: "Beber agua",
        unit: "litros",
        target: 2,
    },
    {
        id: "reading",
        name: "Leer",
        unit: "páginas",
        target: 20,
    },
    {
        id: "walking",
        name: "Caminar",
        unit: "pasos",
        target: 8000,
    },
    {
        id: "exercise",
        name: "Hacer ejercicio",
        unit: "minutos",
        target: 30,
    },
];

export type HabitForm = {
    name: string;
    startDate: string;
    description: string;
};

export function HabitForm() {
    const [form, setForm] = useState<HabitForm>({
        name: "",
        startDate: "",
        description: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    function selectPredefinedHabit(habit: (typeof predefinedHabits)[number]) {
        setForm({
            ...form,
            name: habit.name,
        });
    }

    function validate() {
        const result = habitSchema.safeParse({
            ...form,
        });

        if (!result.success) {
            const newErrors: Record<string, string> = {};

            result.error.issues.forEach((issue) => {
                const field = issue.path[0];

                if (field) {
                    newErrors[String(field)] = issue.message;
                }
            });
            setErrors(newErrors);

            return false;
        }

        setErrors({});
        return true;
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("form");
        if (!validate()) {
            return;
        }

        try {
            console.log(form);
            await createHabit(form);
            alert("Created");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Nuevo hábito</h1>

            <section>
                <h2>Hábitos recomendados</h2>

                {predefinedHabits.map((habit) => (
                    <button
                        type="button"
                        key={habit.id}
                        onClick={() => selectPredefinedHabit(habit)}
                    >
                        {habit.name}
                    </button>
                ))}
            </section>

            <TextField
                id="name"
                label="Nombre del hábito"
                value={form.name}
                onChange={(event) => {
                    setForm({
                        ...form,
                        name: event.target.value,
                    });
                }}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                margin="normal"
            />

            <TextField
                id="startDate"
                type="date"
                value={form.startDate}
                onChange={(event) =>
                    setForm({
                        ...form,
                        startDate: event.target.value,
                    })
                }
                error={!!errors.startDate}
                helperText={errors.startDate}
                fullWidth
                margin="normal"
            />

            <TextField
                id="description"
                label="Descripcion del hábito"
                value={form.description}
                onChange={(event) => {
                    setForm({
                        ...form,
                        description: event.target.value,
                    });
                }}
                error={!!errors.description}
                helperText={errors.description}
                fullWidth
                margin="normal"
            />

            <button type="submit">Crear hábito</button>
        </form>
    );
}
