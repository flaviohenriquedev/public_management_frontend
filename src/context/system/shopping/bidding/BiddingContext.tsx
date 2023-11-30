"use client"

import React, {createContext, useState} from "react";

export const BiddingContext = createContext({})

export function BiddingContextProvider({ children } : { children: React.ReactNode }) {
    return (
        <BiddingContext.Provider value={{}}>
            {children}
        </BiddingContext.Provider>
    )
}