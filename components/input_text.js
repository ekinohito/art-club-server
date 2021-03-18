import {Field} from "formik";

export default function InputString({name, placeholder}) {
    return <Field name={name}>
        {({field}) => <div className="input-group mb-2">
                <textarea className="form-control" placeholder={placeholder} {...field}/>
            </div>}
    </Field>
}