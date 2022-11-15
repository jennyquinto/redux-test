import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { category, inputList } from '../services/data'

const AddPaletas = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h1>Agregar nueva paleta a la colección</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {
                    inputList.map((item, index) => {
                        if (item.type === 'select') {
                            return (
                                <FloatingLabel key={index} label={item.label} className="mb-3">
                                    <Form.Select
                                        aria-label="Default select example"
                                        {...register(item.name)}
                                    >
                                        <option value="">Seleccione una opción</option>
                                        {
                                            category.map((item) =>
                                                <option key={item.value} value={item.label} className="text-capitalize"
                                                >{item.label}</option>
                                            )
                                        }
                                    </Form.Select>
                                    {/* <p>{errors[item.name]?.message}</p> */}
                                </FloatingLabel>
                            )
                        }
                        if (item.type === 'textarea') {
                            return (
                                <FloatingLabel key={index} label={item.label} className="mb-3">
                                    <Form.Control as="textarea" {...register(item.name)} />
                                    {/* <p>{errors[item.name]?.message}</p> */}
                                </FloatingLabel>
                            )
                        }

                        return (
                            <FloatingLabel key={index} label={item.label} className="mb-3">
                                <Form.Control
                                    type={item.type}
                                    size={item.type === "file" ? "sm" : ""}
                                    {...register(item.name)}
                                />
                                {/* <p>{errors[item.name]?.message}</p> */}
                            </FloatingLabel>
                        )
                    })
                }
                <Button variant="warning" type="submit" className="mb-3">
                    Agregar paleta
                </Button>

            </Form>
        </div>
    )
}

export default AddPaletas
