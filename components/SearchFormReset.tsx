"use client";

import React from 'react';
import Link from "next/link";
import {X} from "lucide-react";

function SearchFormReset() {

    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;

        if (form) {
            form.reset();
        }
    }

    return <button onClick={reset} className="clear-button">
        <Link href="/" className="search-btn text-white">
            <X className="size-5" />
        </Link>
    </button>
}

export default SearchFormReset;