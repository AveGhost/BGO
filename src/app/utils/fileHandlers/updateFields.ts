import { FieldType, Field } from "@/app/mixins/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;

export const updateField = (setContent: SetContent) => (id: number, newValue: string, newAdditional?: string) => {
    setContent(prev =>
      prev.map(field =>
        field.id === id ? { ...field, value: newValue, additional: newAdditional ?? field.additional } : field
      )
    );
};