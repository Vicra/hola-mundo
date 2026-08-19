import { HabitForm } from "../components/forms/HabitForm";

// habit service that makes http requests GET POST PATCH requests to the backend using fetch
export async function createHabit(form: HabitForm) {
    console.log(form);
    await fetch("http://localhost:3000/habits", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...form,
            userId: "6062ec4a-4bc9-4ddc-81ac-7c01412acfa9",
        }),
    });
}

export async function getHabits() {
    const habits = await fetch("http://localhost:3000/habits");
    return habits.json();
}
