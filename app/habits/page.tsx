"use client";
import { useEffect, useState } from "react";
import { getHabits } from "../services/habit.service";
import HabitCard from "../components/habits/card";

export default function HabitList() {
    const [habits, setHabits] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getHabits();
            setHabits(response);
        }
        fetchData();
    }, []);
    return (
        <>
            <h2>My Habits</h2>
            {habits.map((habit) => (
                <HabitCard props={habit} />
            ))}
            {/* es lo mismo de arriba */}
            {/* {habits.map((habit) => {
                return (
                    <div key={habit.id}>
                        <h3>{habit.name}</h3>
                        <p>{habit.description}</p>
                        <p>Start Date: {habit.startDate}</p>
                    </div>
                );
            })} */}
        </>
    );
}
