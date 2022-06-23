import React, { Component } from 'react'
import Banner from './img/Banner2.png'
import Vantagens from './img/VantagensIcon.png'
import './homebody.css'

export default class HomeBody extends Component {

    render() {
        return(
            <div className='HomeBody'>
                <div className='ImgInput'>
                    <div>
                        <img className='img-body' src={Banner}></img>
                    </div>
                    <div className='InputsBody'>
                        <form>
                            <h2 className='TitleBody'>
                                Login
                            </h2>
                            <div>
                                <label for="EmailLogin" className="form-label">Email</label>
                                <input className="form-control" id="EmailLogin"></input>
                            </div>
                            <div>
                                <label for="SenhaLogin" className='form-label'>Senha</label>
                                <input className="form-control" id="SenhaLogin"></input>
                            </div>
                            <div class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                                <div class="flex items-center mr-auto">
                                    <label className="cursor-pointer select-none">Não tem uma conta?  </label>
                                    <a href="#">
                                        <label className="cursor-pointer select-none cadastre-se">  Cadastre-se</label>
                                    </a>
                                </div>
                            </div>
                            <div className='btnBody'>
                                <button className="btn btn-primary">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='DivVer-mais'>
                    <a href="#section-vantagens">
                    <button className="ver-mais">
                        <i className="fa-solid fa-arrow-down"></i>
                    </button>
                    </a>
                </div>
                <section class="section-2" id="section-vantagens">
                    <div className="section-header">
                        <h1 className="header">Vantagens</h1>
                    </div>
                    <div className="vantagens">
                        <div className="vantagens-grid">
                            <div className="topico">
                                <div className="topico-header">
                                    <i className="fas fa-briefcase"></i>
                                    <h3>Oportunidades</h3>
                                </div>
                                <div className="topico-conteudo">
                                    <p>Com a gente o seu emprego é garantido!!! Você terá ótimas oportunidades para entrar na escola dos sonhos e alcançar a tão sonhada estabilidade totalmente <b>de graça</b>.
                                    </p>
                                </div>
                            </div>
                            <div className="topico">
                                <div className="topico-header">
                                    <i className="fas fa-chart-line"></i>
                                    <h3>Crescimento</h3>
                                </div>
                                <div className="topico-conteudo">
                                    <p>Além de conseguir um bom emprego, você terá ótimas chances de se provar para conseguir se destacar na escola. Temos também a opção de avaliação aonde seu supervisor poderá te dar notas por meio de estrelas. </p>
                                </div>
                            </div>
                            <div className="topico">
                                <div className="topico-header">
                                    <i className="fas fa-school"></i>
                                    <h3>Escolas</h3>
                                </div>
                                <div className="topico-conteudo">
                                    <p>Cada escola pode ter um login único para navegar pelo site, com acesso a várias informações úteis sobre as caracteristicas e formações dos professores que poderão ser contatados pela escola.
                                    </p>
                                </div>
                            </div>
                            <div className="topico">
                                <div className="topico-header">
                                    <i className="far fa-handshake"></i>
                                    <h3>Contratação</h3>
                                </div>
                                <div className="topico-conteudo">
                                    <p>Contamos com um sistema de chat, aonde a escola poderá conversar com o professor para conhece-lo ainda melhor e para facilitar o agendamento de uma possivel entrevista de emprego.
                                    </p>
                                </div>
                            </div>
                            <div className="topico">
                                <div className="topico-header">
                                    <i className="fas fa-info"></i>
                                    <h3>Informação</h3>
                                </div>
                                <div className="topico-conteudo">
                                    <p>Contamos com perfis individuais repletos de informações tanto dos professores quanto da escola para ambos se conhecerem melhor.
                                    </p>
                                </div>
                            </div>
                            <div className="topico">
                                <div className="topico-header">
                                    <i className="fas fa-upload"></i>
                                    <h3>Posts</h3>
                                </div>
                                <div className="topico-conteudo">
                                    <p>Temos também um sistema de post como de uma rede social para que as escolas compartilhem suas atividades e chamem a atenção dos professores.
                                    </p>
                                </div>
                            </div>
                            <div className="vantagens-img-wrapper">
                                <img src={Vantagens}></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}