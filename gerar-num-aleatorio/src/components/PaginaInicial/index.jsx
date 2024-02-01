import { useState } from "react";
import "./estilo.css";

export default function PaginaInicial() {
    const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
    const [numeroAleatorio, setNumeroAleatorio] = useState(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * (60 - 1) + 1))
    );

    let gerarNumero = () => {
        const novoNumeros = Array.from({ length: quantidadeNumeros }, () =>
            Math.floor(Math.random() * (60 - 1) + 1)
        );
        setNumeroAleatorio(novoNumeros);
    };

    let handleQuantidadeChange = (e) => {
        const novaQuantidade = parseInt(e.target.value, 10);
        setQuantidadeNumeros(
            isNaN(novaQuantidade) ? quantidadeNumeros : novaQuantidade
        );
    };

    return (
        <>
            <div>
                <h1>Olá, bem vindo ao seu gerador de números aleatórios!!!</h1>
                <h3>Você pode escolher de 6 a 20 números de 1 a 60 para sua loteria favorita!!!!</h3>
            </div >
            <div className="area-botao">
                <label>
                    Escolha a quantidade de números aleatórios (entre 6 e 20):
                </label>
                <div className="input">
                    <input
                        type="number"
                        value={quantidadeNumeros}
                        onChange={handleQuantidadeChange}
                        min="6"
                        max="20"
                    />
                </div>
                <div className="botao">
                    <button onClick={gerarNumero}>Gerar Números</button>
                </div>
                <div className="subtitulo">
                    <h3>Números aleatórios: </h3>
                </div>
                <div className="result">
                    <div className="numeros-circulos">
                        {numeroAleatorio.map((numero, index) => (
                            <span key={index} className="numero-circulo">
                                {numero}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
