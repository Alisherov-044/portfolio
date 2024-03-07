"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { telegramUrl } from "@/utils/urls";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Section, Textarea, form } from "@/components";

const {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} = form;

const formScheme = z.object({
    name: z.string({ required_error: "name is required" }),
    email: z
        .string({ required_error: "email is required" })
        .email({ message: "please enter valid email" }),
    message: z.string({ required_error: "message is required" }),
});

export function Contact() {
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(event: z.infer<typeof formScheme>) {
        let message = `
        name: ${event.name};
        email: ${event.email};
        message: ${event.message}
        `;

        toast.promise(fetch(telegramUrl(message)), {
            loading: "Loading...",
            success: "Message Sent Successfully!",
            error: "Error accured while sending message!",
        });
        form.reset();
    }

    return (
        <Section
            id="contact"
            title="Let's talk business"
            description="Now that you know a lot about me, let me know if you are interested to work with me."
            className="flex flex-col gap-y-5 lg:flex-row gap-x-4 container-sm mt-20 mb-10 lg:mt-40 lg:mb-20"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-4 w-full lg:w-1/2 shrink-0"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant="primary" className="w-full text-md">
                        Let&apos;s get started
                    </Button>
                </form>
            </Form>
        </Section>
    );
}
