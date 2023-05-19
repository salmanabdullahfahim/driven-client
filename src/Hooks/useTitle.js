import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} | Driven`
    } ,[title])
}

export default UseTitle;