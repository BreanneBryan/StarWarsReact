
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseRarity, chooseSize, chooseDate } from "../redux/slices/RootSlice"

interface WishFormProps {
  id?: string[]
  onClose: () => void;
}

const WishForm = ( props:WishFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseRarity(data.rarity));
      dispatch(chooseSize(data.size));
      dispatch(chooseDate(data.release_date));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="rarity">Rarity</label>
          <Input {...register('rarity')} name='rarity' placeholder="Rarity" />
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <Input {...register('size')} name='size' placeholder="Size" />
        </div>
        <div>
          <label htmlFor="release_date">Date</label>
          <Input {...register('release_date')} name='release_date' placeholder="Date" />
        </div>

        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-yellow-300 p-2 rounded hover:bg-slate-800 text-black"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WishForm      