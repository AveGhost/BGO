import Button from "../button/button.component"
import { FieldType } from "@/types/PostField"
const AddFieldButtons = ({addField}: {addField: (type: FieldType) => void}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Button type="button" text="Dodaj pole z obrazkiem" event={() => addField("IMAGE")} classes="bg-zinc-600" />
            <Button type="button" text="Dodaj nagłówek" event={() => addField("HEADING")} classes="bg-zinc-600" />
            <Button type="button" text="Dodaj treść" event={() => addField("PARAGRAPH")} classes="bg-zinc-600" />
        </div>
    )
}

export default AddFieldButtons