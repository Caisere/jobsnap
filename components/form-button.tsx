'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

function FormButton ({label}:{label: string}) {
    const {pending:isSubmitting} = useFormStatus()

    return (
        <Button 
            type="submit"
            className="w-full bg-neutral-600 mt-4 text-white px-4 py-2 rounded-md hover:bg-neutral-700 disabled:opacity-50 transition-colors duration-300 disabled:cursor-not-allowed"
            disabled={isSubmitting}
        >
            {label} <span>{isSubmitting && <Spinner />}</span>
        </Button>
    )
}

export default FormButton