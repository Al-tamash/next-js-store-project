import { faker } from '@faker-js/faker'
import { Button } from '@/components/ui/button'
import FormContainer from '@/components/form/FormContainer'
import { createProductAction } from '@/utils/actions'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import ImageInput from '@/components/form/ImageInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import CheckBoxInput from '@/components/form/CheckBoxInput'
import { SubmitButton } from '@/components/form/Buttons'

function CreateProductPage() {
  const name = faker.commerce.productName()
  const company = faker.company.name()
  const description = faker.lorem.paragraph({ min: 10, max: 12 })
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>Create Product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              name='name'
              type='text'
              label='Product Name'
              defaultValue={name}
            />
            <FormInput
              name='company'
              type='text'
              label='Company'
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name='description'
            defaultValue={description}
            labelText='product description'
          />
          <div className='mt-6'>
            <CheckBoxInput name='featured' label='Featured' />
          </div>
          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProductPage
