import React from 'react'
import useDymanicForm from '../../hooks/useDynamicForm'
import Footer from '../../Pages/Footer'
import { useDispatch } from 'react-redux'
import { AddTours } from '../../redux/actions/adminActions'
import { Link } from 'react-router-dom'


const AddTour = () => {


    const dispatch = useDispatch()

    const handleSubmit = e => {
        dispatch(AddTours(state))
    }


    const config = [
        { fieldName: "Place", type: "select", options: ["Kedarnath", "Taj Mahal", "The Red Front", "Ajanta Caves", "Mahabaleshwar"] },
        { fieldName: "time", type: "select", options: ["5 hours", "12 hours", "24 hours", "3 days", "More Than 3 days"] },
        { fieldName: "date", type: "date" },
        { fieldName: "desc", type: "text" },
        { fieldName: "price", type: "number" },
        { fieldName: "imageAddress", type: "text" },
        { fieldName: "review", type: "number" },
        { fieldName: "stars", type: "number" },
        { fieldName: "Add Tour", type: "submit", onClick: handleSubmit },
    ]


    const [ui, state, pre] = useDymanicForm(config)




    return <>

        <div className="bg-[url('https://media.istockphoto.com/id/1287065554/photo/sound-wave.webp?b=1&s=170667a&w=0&k=20&c=0IRToG5D5o2fM6U9N9n12Mnexdnz2xSIWD-ncnt5WAI=')] h-screen bg-cover">
            <div className="bg-slate-400 bg-opacity-60 h-full p-5 px-7 gap-5 mx-auto flex ">
                <div className="w-[20%]">
                    <button className="btn btn-primary"><Link to={"/Admin-home"}>Back</Link></button>
                </div>
                <div className="w-[50%]">
                    {ui}
                </div>


            </div>
            <div className="text-right">

                <Link className='btn me-4 btn-success my-8' to={"/AdminAllTours"}>All Tours</Link>
            </div>
        </div>
        <div className="mt-28"></div>
        <Footer className={"mt-11"} />

    </>
}

export default AddTour