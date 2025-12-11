"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";


// sign-up schema
const SignUpSchema = z.object({
    name: z.string("Name is required"),
    email: z.email("Provide a valid email-address"),
    password: z.string("Password is required"),
});

// type for the sign-up data
export type SignupData = z.infer<typeof SignUpSchema>;

function SignUpPage() {
    const form = useForm<SignupData>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // function to handle the sign-up data
    async function onSubmit(formData: SignupData) {
        try {
            // send the sign-up data to the server
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            // if the server returns an error, throw an error
            if (!response.ok) {
                throw new Error((await response.text()) || "Failed to sign up");
            }
            // if the server returns data, log the data
            const responseData = await response.json();
            toast.success(responseData.message || "Sign up successful");
            form.reset();
        } catch (error) {
            toast.error((error as Error).message || "Failed to sign up");
        }
    }

    return (
        <div className="">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col max-w-sm mx-auto justify-center gap-3 h-screen"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                            <Input placeholder="John Doe" type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                            <Input placeholder="Password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
                <div className="flex gap-1 items-center text-sm text-stone-400">
                    <p>Already have an account?</p>
                    <Link className="hover:underline font-semibold" href="/signin">
                        Login
                    </Link>
                </div>
            </Form>
        </div>
    );
}

export default SignUpPage;
