import Header from "../components/Header"
import CardLista from "../components/CardLista"
import instiuicoes from "../../data/data"
import { useState } from "react"

const Lista = ({ cidade }) => {

    const Card = instiuicoes.map(e => {
        if (e.endereco.cidade == cidade) {
            return(
                <CardLista
                    key={e.id}
                    nome={e.nome}
                    cidade={e.endereco.cidade}
                    uf={e.endereco.estado}
                    rua={e.endereco.logradouro}
                    complemento={e.endereco.numero}
                    tel={e.tel}
                />
            )
        }
    })

    return (
        <>
            <Header title={"Instituições"} link={"/home"} />
            {Card}
            {/*  <CardLista 
                nome={"Orfanato ABC"}
                cidade={"São Paulo"}
                uf={"SP"}
                rua={"Rua XYZ"}
                complemento={"120"}
                tel={"11945347856"}
            />
            <CardLista 
                nome={"Orfanato ABC"}
                cidade={"São Paulo"}
                uf={"SP"}
                rua={"Rua XYZ"}
                complemento={"120"}
                tel={"11945347856"}
            />
            <CardLista 
                nome={"Orfanato ABC"}
                cidade={"São Paulo"}
                uf={"SP"}
                rua={"Rua XYZ"}
                complemento={"120"}
                tel={"11945347856"}
            />
            <CardLista 
                nome={"Orfanato ABC"}
                cidade={"São Paulo"}
                uf={"SP"}
                rua={"Rua XYZ"}
                complemento={"120"}
                tel={"11945347856"}
            /> */}
        </>
    )
}

export default Lista

/* if(e.endereco.cidade == cidade) {
    console.log("aqui",e.endereco.cidade, cidade ),
    <div>"abc"</div>,
    <CardLista
            
            nome={e.nome}
            cidade={e.endereco.cidade}
            uf={e.endereco.estado}
            rua={e.endereco.logradouro}
            complemento={e.endereco.numero}
            tel={e.tel}
        />
   } */