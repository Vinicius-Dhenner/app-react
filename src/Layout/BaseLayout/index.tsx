import React, { Children } from "react"

type BaseLayoutProps = {
    children:React.ReactNode
    appBarTitle:String
}
export function BaseLayout ({children, appBarTitle}:BaseLayoutProps) {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typographu variant='h5'></Typographu>
                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
        </>
    )
}