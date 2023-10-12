import {Title} from "@/components/data_display/table/style";

interface TableTitleProps {
    value: string
}

export function TableTitle({value} : TableTitleProps) {
    return (
        <Title>
            {value}
        </Title>
    )
}