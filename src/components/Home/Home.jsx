import { Link } from "react-router-dom";
import User from "../User/User";
import { FaPlusCircle } from "react-icons/fa";
import AddPhotoModal from "../AddPhotoModal/AddPhotoModal";
import { useEffect, useState } from "react";
import * as service from "../../services/TimesCrudService";
import { auth } from '../../services/AuthServices'
import { useAuthState } from "react-firebase-hooks/auth";
import {v4 as uuidv4} from 'uuid';
import Layout1 from "../PhotoLayouts/Layout1/Layout1";
import Layout2 from "../PhotoLayouts/Layout2/Layout2";
import Layout3 from "../PhotoLayouts/Layout3/Layout3";
import Layout4 from "../PhotoLayouts/Layout4/Layout4";
import Layout5 from "../PhotoLayouts/Layout5/Layout5";
import Layout6 from "../PhotoLayouts/Layout6/Layout6";

export default function Home() {
    const [works, setWorks] = useState([]);
	const [user, loading, error] = useAuthState(auth)

	useEffect(() => {
		if (loading) return

		if (user) {
			service.getAllWorks(works => setWorks(works), user);
		}
	}, [user, loading]);

    function layout1()
    {
        return works.map(photo => {
            console.log(photo)
            return (<Layout1 key={uuidv4()} photoUrls={[photo]} />)
        })
    }

    function layout2()
    {
        let current = []
        const elements = []

        for (let i = 0; i < works.length; i++) {
            current.push(works[i]);

            if (current.length == 2)
            {
                elements.push(<Layout2 key={uuidv4()} photoUrls={current} />)
                current = []
               
            }
        }

        if (current.length > 0)
        {
            elements.push(<Layout2 key={uuidv4()} photoUrls={current} />)
        }

        return elements
    }

    function layout3()
    {
        let current = []
        const elements = []

        for (let i = 0; i < works.length; i++) {
            current.push(works[i]);

            if (current.length == 4)
            {
                elements.push(<Layout3 key={uuidv4()} photoUrls={current} />)
                current = []
            }
        }

        if (current.length > 0)
        {
            elements.push(<Layout3 key={uuidv4()} photoUrls={current} />)
        }

        return elements
    }

    function layout4()
    {
        return works.map(photo => {
            console.log(photo)
            return (<Layout4 key={uuidv4()} photoUrls={[photo]} />)
        })
    }

    function layout5()
    {
        let current = []
        const elements = []

        for (let i = 0; i < works.length; i++) {
            current.push(works[i]);

            if (current.length == 2)
            {
                elements.push(<Layout5 key={uuidv4()} photoUrls={current} />)
                current = []
               
            }
        }

        if (current.length > 0)
        {
            elements.push(<Layout5 key={uuidv4()} photoUrls={current} />)
        }

        return elements
    }

    function layout6()
    {
        let current = []
        const elements = []

        for (let i = 0; i < works.length; i++) {
            current.push(works[i]);

            if (current.length == 4)
            {
                elements.push(<Layout6 key={uuidv4()} photoUrls={current} />)
                current = []
            }
        }

        if (current.length > 0)
        {
            elements.push(<Layout6 key={uuidv4()} photoUrls={current} />)
        }

        return elements
    }

	return (
        <div className="container py-4">

            <div className="py-3">
                <AddPhotoModal />
            </div>

            {layout6()}
        </div>
	);
}