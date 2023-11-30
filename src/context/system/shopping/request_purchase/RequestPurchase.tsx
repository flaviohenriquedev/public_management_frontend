"use client"

import React, {createContext, useState} from "react";

export const RequestPurchaseContext = createContext({})

export function RequestPurchaseProvider({children}: { children: React.ReactNode }) {
    return (
        <RequestPurchaseContext.Provider value={{}}>
            {children}
        </RequestPurchaseContext.Provider>
    )
}