import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `Driven | ${title} `
    } ,[title])
}

export default UseTitle;