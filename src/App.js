import './App.css';
import React from 'react';
import Select from 'react-select';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const lojas = [
	{cidade: 'Selecione uma opção', codLoja: '0', endereco: 'Selecione uma opção'},
	{cidade: 'Marabá', codLoja: '1', endereco: 'Av. Antônio Maia, 1204 - Velha Marabá'},
	{cidade: 'Parauapebas', codLoja: '2', endereco: 'Rua do comércio, 59'},
	{cidade: 'Marabá', codLoja: '3', endereco: 'Av. Nagib Mutran, 187 - Cidade Nova'},
	{cidade: 'Marabá', codLoja: '4', endereco: 'Av. Antônio Maia, 1405 - Velha Marabá'},
	{cidade: 'Imperatriz', codLoja: '5', endereco: 'Av. Getúlio Vargas, 879'},
	{cidade: 'Belém', codLoja: '6', endereco: 'Rua Santo Antônio, 57'},
	{cidade: 'Araguaína', codLoja: '7', endereco: 'Av. Cônego João Lima, 2305'},
	{cidade: 'Marabá', codLoja: '8', endereco: 'Shopping Pátio Marabá'},
	{cidade: 'Ananindeua', codLoja: '9', endereco: 'Conjunto Cidade Nova IV'},
	{cidade: 'Parauapebas', codLoja: '11', endereco: 'Cidade Jardim'},
	{cidade: 'Tucuruí', codLoja: '12', endereco: 'Tucuruí'},
];

const cidades = [
	{nome: "Selecione uma opção", id: "0"},
	{nome: "Ananindeua", id: "6"},
	{nome: "Araguaína", id: "5"},
	{nome: "Belém", id: "4"},
	{nome: "Imperatriz", id: "3"},
	{nome: "Marabá", id: "1"},
	{nome: "Parauapebas", id: "2"},
];

const empresas = [
	{value: 'Não há nessa lista', id: 1},
];

class App extends React.Component {

	state = {
		lojasFiltradas: [],
		mostrarFormulario: false,
	}
	
	mudarCidade = (city) => {
		const filtered = lojas.filter(x => x.cidade === city.nome);
		this.setState({ lojasFiltradas: filtered });
	};

	mudarLoja = (loja) => {
		if(loja.codLoja !== '0'){
			this.setState({mostrarFormulario: true});
		}
	}

	render(){

		return (

			<div className="App">
				<Helmet>
					<title>Baby+ Convênio</title>
				</Helmet>
				<header className="App-header">
					<img src='/images/convenio.jpeg' className="logo" alt="logo" />
				</header>
				<div className="App-body">
					{/* CADASTRE-SE */}
					<div className="m-auto col-md-6 col-12">
						<FontAwesomeIcon color="#f6398d" icon={faUser} size={'2x'} />
						<label className="cadastre">Cadastre-se</label>
					</div>
					<div className="col-md-6 col-12">
						<div className="linha">
							<div className="col-sm-3 underline"></div>
							<label className="col-sm-6 negrito">preencha o formulário abaixo</label>
							<div className="col-sm-3 underline"></div>
						</div>
					</div>
					{/* FORMULÁRIO */}
					<div className="m-auto pt-3 col-md-6 col-12">
						<div className="row">
							{/* CIDADE E LOJA */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<div className="col-sm-1">
										<label className="form-label negrito">Cidade*</label>
									</div>
									<Select options={cidades} 
										getOptionLabel={(cidades)=>cidades.nome}
										getOptionValue={(cidades)=>cidades.codLoja}
										placeholder="Selecione uma cidade"
										onChange={city => this.mudarCidade(city)}
										/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<div className="col-sm-1">
										<label className="form-label negrito">Loja*</label>
									</div>
									<Select className="basic-single" options={this.state.lojasFiltradas} 
										getOptionLabel={(lojasFiltradas)=>lojasFiltradas.endereco}
										getOptionValue={(lojasFiltradas)=>lojasFiltradas.id}
										placeholder="Selecione uma loja"
										onChange={loja => this.mudarLoja(loja)}
										/>
								</div>
							</div>
							{this.state.mostrarFormulario ? 
							<div>
							{/* NOME E CPF */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<label className="form-label negrito left">Nome Completo*</label>
									<input type="text" className="custom-input form-control" placeholder="Digite seu nome"/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<label className="form-label negrito left">CPF*</label>
									<input type="text" className="custom-input form-control" placeholder="000.000.000-00"/>
								</div>
							</div>
							{/* TELEFONE E EMPRESA */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<label className="form-label negrito left">Telefone (WhatsApp)*</label>
									<input type="text" className="custom-input form-control" placeholder="(00) 00000-0000"/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<div className="col-sm-1">
										<label className="form-label negrito">Empresa</label>
									</div>
									<Select className="basic-single" options={empresas} 
										getOptionLabel={(empresas)=>empresas.value}
										getOptionValue={(empresas)=>empresas.id}
										placeholder="Selecione uma empresa"
										/>
								</div>
							</div>
							{/* EMAIL E DATA DE NASCIMENTO */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<label className="form-label negrito left">Email*</label>
									<input type="text" className="custom-input form-control" placeholder="seuemail@email.com"/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<label className="form-label negrito left">Data de Nascimento*</label>
									<input type="text" className="custom-input form-control" placeholder=""/>
								</div>
							</div>
							</div>
							: null}
						</div>
					</div>
					{this.state.mostrarFormulario ? 
					<div>
					{/* OUTRAS INFORMAÇÕES */}
					<div className="col-md-6 col-12 mt-10">
						<div className="linha">
							<div className="col-sm-3 underline"></div>
							<label className="col-sm-6 negrito">Outras informações</label>
							<div className="col-sm-3 underline"></div>
						</div>
					</div>
					<div className="pt-3 col-md-6 col-12">
						<div className="linha">
							<div className="">
								<input type="checkbox"/>
								<label className="form-label ml-1 black">Está gestante?</label>
							</div>
						</div>
						<div className="linha">
							<div className="left">
								<input type="checkbox"/>
								<label className="form-label ml-1 black">Possui Dependentes?</label>
							</div>
						</div>
					</div>
					{/* PARA FINALIZAR */}
					<div className="col-md-6 col-12 mt-10">
						<div className="linha">
							<div className="col-sm-3 underline"></div>
							<label className="col-sm-6 negrito">para finalizar, defina sua senha</label>
							<div className="col-sm-3 underline"></div>
						</div>
					</div>
					{/* SENHA */}
					<div className="m-auto pt-3 col-md-6 col-12">
						<div className="row">
							<div className="col-md-6 col-12">
								<div className="custom-form-group form-group">
									<label className="form-label negrito left">Senha*</label>
									<input type="password" className="custom-input form-control"/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group form-group">
									<label className="form-label negrito left">Confirmar senha*</label>
									<input type="password" className="custom-input form-control"/>
								</div>
							</div>
							<div className="linha">
								<div className="mt-10">
									<input type="checkbox"/>
									<label className="form-label ml-1 black termos">
										Ao finalizar, você concorda com nossos <a href="https://aprincipalbb.com.br/termos-de-uso.php">Termos de uso</a> e <a href="https://aprincipalbb.com.br/politica-de-privacidade.php">Política de privacidade</a>
									</label>
								</div>
							</div>
						</div>
					</div>
					</div>
					: null}
					{/* REGRAS */}
					<div className="col-md-6 col-12 mt-10">
						<div className="linha">
							<div className="col-sm-3 underline"></div>
							<label className="col-sm-6 negrito fs-20">@aprincipalbebe</label>
							<div className="col-sm-3 underline"></div>
						</div>
						<div className="col-12">
							<div className="col-sm-1">
								<label className="form-label negrito fs-14 regras">*Regras</label>
							</div>
							<div>
								<ul className="lista_itens">
									<li>Realizar o cadastro / atualização dos dados acessando o link e/ou QR code;</li>
									<li>O presente será um voucher compra;</li>
									<li>O crédito é valido por 07 dias após preenchimento do cadastro;</li>
									<li>O crédito poderá ser retirado somente pela titular do cadastro, é intransferível;</li>
									<li>Não é acumulativo;</li>
									<li>Validação da promoção será feita pela gerente da loja;</li>
									<li>Válido em qualquer loja física da rede A principal Bebê & Mamãe;</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
