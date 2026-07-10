import notebook from "../../assets/Logos/notebook.svg"

function Account(){
    return(
        //Container
        <div className="w-full h-full pt-[50px]">
            <div className="flex ">
                <div className="w-[30%] pl-[50px] pr-[50px]">
                    <ul className="[&>li]:pt-[10px] [&>li]:tracking-[2.5px] [&>li]:text-[#15342d]">
                        <li className="font-bold">PEDIDOS</li>
                        <li>DEVOLUÇÕES</li>
                        <li>FAVORITOS</li>
                        <li>MEUS DETALHES</li>
                        <li>AJUSTES</li>
                    </ul>
                </div>
                <div className="pt-[20px] w-[50%]">
                    <img className="size-[30px] fill-[#15342d]" src={notebook}/>
                    <p className="text-[#15342d]">Ainda não fez nenhum pedido</p>
                </div>
                <div className="w-[20%] flex justify-end pr-[20px]">
                    <ul className="[&>li]:pt-[10px] [&>li]:text-[#15342d] [&>li]:text-[15px]">
                        <li>CARRINHO</li>
                        <li className="font-bold">VINICIUS G.</li>
                        <li>AJUDA</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Account