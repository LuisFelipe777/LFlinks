import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../servises/api";
import { saveLink, getLinksSaves } from "../../servises/storeLinks";

export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShotLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })
            setData(response.data);
            setShowModal(true);

            saveLink("@encurtalink", response.data);

            setLink('');
        } catch {
            alert("erro");
            setLink('');
        }
    }

    return (
        <div className="container-home">

            <div className="logo">
                <img src="/link.png" alt="Link logo" />
                <h1> LuisFelipeLink</h1>
                <span>Cole seu link para encurtar</span>

            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color="white" />
                    <input placeholder="Cole seu link aqui..." value={link} onChange={e => setLink(e.target.value)} />
                </div>
                <button onClick={handleShotLink}>Gerar Link</button>
            </div>

            <Menu />
            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    )
}