import {Field} from "formik";

export default function InputString({name, placeholder}) {
    return <Field name={name}>
        {({field}) => <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder={placeholder} {...field}/>
        </div>}
    </Field>
}