import { Input } from '../ui/input'
import { Label } from '../ui/label'
const name = 'price'
type formInputNumberProps = {
  defaultValue?: number
}
function PriceInput({ defaultValue }: formInputNumberProps) {
  return (
    <div>
      <Label htmlFor='price'>Price ($)</Label>
      <Input
        id={name}
        type='number'
        name={name}
        defaultValue={defaultValue || 100}
        min={0}
        required
      />
    </div>
  )
}
export default PriceInput
