'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

function FormButton ({label}:{label: string}) {
    const {pending:isSubmitting} = useFormStatus()

    return (
        <Button 
            type="submit"
            className="bg-neutral-700 text-primary mt-6 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors duration-300"
            disabled={isSubmitting}
        >
            {label} <span>{isSubmitting && <Spinner />}</span>
        </Button>
    )
}

export default FormButton