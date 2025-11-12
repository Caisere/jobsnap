'use client'


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
import type { SignupData } from "@/app/signup/page";

const SignInSchema = z.object({
    email: z.email("Provide a valid email-address"),
    password: z.string("Password is required"),
});

type SignInData = Omit<SignupData, 'name'>

function SignInForm() {
    const form = useForm<SignInData>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    function onSubmit(data:SignInData) {
        try{
            const response = fetch('')
        } catch {

        }
    }

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mx-auto gap-3 w-[50%]">
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
                    <Button className="bg-neutral-700 text-white p-2 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors duration-300" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
}

export default SignInForm;
