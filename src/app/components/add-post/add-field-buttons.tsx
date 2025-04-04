import FormButton from "../form/form-button.component"
import { FieldType } from "@/app/mixins/PostField"
const AddFieldButtons = ({addField}: {addField: (type: FieldType) => void}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <FormButton type="button" text="Dodaj pole z obrazkiem" event={() => addField("IMAGE")} />
            <FormButton type="button" text="Dodaj nagłówek" event={() => addField("HEADING")} />
            <FormButton type="button" text="Dodaj treść" event={() => addField("PARAGRAPH")} />
        </div>
    )
}

export default AddFieldButtons