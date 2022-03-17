import './App.css';
import Select from 'react-select';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useState } from 'react';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ErrorToast, SuccessToast } from './components/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {

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

	const sexo = [
		{value: 'Selecione o sexo', id: '0'},
		{value: 'Masculino', id: '1'},
		{value: 'Feminino', id: '2'},
		{value: 'Não sei ainda', id: '3'},
	];
    
    const empresas = [
		{value: 'Selecione uma empresa', id: '0'},
        {value: 'Não há nessa lista', id: '1'},
    ];

	const [lojasFiltradas, setLojasFiltradas] = useState('');
	const [mostrarFormulario, setMostrarFormulario] = useState(false);
	const [nome, setNome] = useState('');
	const [cpf, setCpf] = useState('');
	const [telefone, setTelefone] = useState('');
	const [email, setEmail] = useState('');
	const [nascimento, setNascimento] = useState('');
	const [isGestante, setIsGestante] = useState(false);
	const [setHasDependentes] = useState(false);
	const [semanas, setSemanas] = useState('');
	const [previsao, setPrevisao] = useState('');
	const [setNomeBebe] = useState('');
	const [sexoBebe, setSexoBebe] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmaSenha, setConfirmaSenha] = useState('');
	const [aceitoTermo, setAceitoTermo] = useState(false);
	const [empresa, setEmpresa] = useState('');
	const [empresaOndeTrabalha, setEmpresaOndeTrabalha] = useState('');


	function validar(){
		let validacoes = true;
		if(nome === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo Nome Completo', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(cpf === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo CPF', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(telefone === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo Telefone', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(empresa !== '1'){
			validacoes = false;
			ErrorToast({ message: 'Selecione uma Empresa', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(empresa === '1'){
			if(empresaOndeTrabalha === ''){
				validacoes = false;
				ErrorToast({ message: 'Preencha o campo Empresa onde trabalha', headerMessage: 'Ops, há pendências de preenchimento:' });
				return;
			}
		}
		if(email === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo Email', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(email !== ''){
			let valido = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
			if (!valido){
				validacoes = false;
				ErrorToast({ message: 'Preencha um Email válido', headerMessage: 'Ops, há pendências de preenchimento:' });
				return;
			}
		}
		if(nascimento === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo Nascimento', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(isGestante){
			if(semanas === ''){
				validacoes = false;
				ErrorToast({ message: 'Preencha o campo Quantas Semanas', headerMessage: 'Ops, há pendências de preenchimento:' });
				return;
			}
			// TODO: Validar previsao do parto (somente data futura)
			if(previsao === ''){
				validacoes = false;
				ErrorToast({ message: 'Preencha o campo Previsão do parto', headerMessage: 'Ops, há pendências de preenchimento:' });
				return;
			}
			if(sexoBebe === '' || sexoBebe === 'Selecione o sexo'){
				validacoes = false;
				ErrorToast({ message: 'Selecione o Sexo do Bebê', headerMessage: 'Ops, há pendências de preenchimento:' });
				return;
			}
		}
		if( senha === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo Senha', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if( confirmaSenha === ''){
			validacoes = false;
			ErrorToast({ message: 'Preencha o campo Confirmar Senha', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if( senha !== confirmaSenha){
			validacoes = false;
			ErrorToast({ message: 'As senhas digitadas devem ser iguais', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(!aceitoTermo){
			validacoes = false;
			ErrorToast({ message: 'Aceite os termos de uso e políticas de privacidade', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
		}
		if(validacoes){
			SuccessToast({ message: 'Você concluiu seu cadastro.', headerMessage: 'Parabéns!' });
			return;
		}
	}

	function validarCpf(val){
		let cpf = val.target.value.replace(/[^\d]+/g, '');
		if (cpf.length !== 11) {
            ErrorToast({ message: 'O campo CPF parece não estar completo', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
        }
	}

	function validarTelefone(val){
		let tel = val.target.value.replace(/[^\d]+/g, '');
		if (tel.length !== 11) {
            ErrorToast({ message: 'O campo Telefone parece não estar completo', headerMessage: 'Ops, há pendências de preenchimento:' });
			return;
        }
	}

	function validarNascimento(val){
		let nascimento = val.target.value.replace(/[^\d]+/g, '');
		if (nascimento.length !== 8) {
            ErrorToast({ message: 'O campo Data de Nascimento parece não estar completo', headerMessage: 'Ops, há pendencias de preenchimento:' });
			return;
        }
		let data = val.target.value.split('/');
		let flag = false;
		let dia = parseInt(data[0]);
		let mes = parseInt(data[1]);
		let ano = parseInt(data[2]);
		if (mes > 12 || mes < 1) {
			flag = true;
		}
		if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && (dia > 30 || dia < 0)) {
			flag = true;
		}
		if ((mes === 1 || mes === 2 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) && (dia > 31 || dia < 0)) {
			flag = true;
		}
		if ((mes === 2) && (dia > 28 || dia < 0)) {
			flag = true;
		}
		if (ano < 1900) {
			flag = true;
		}
		if(flag){
			ErrorToast({ message: 'Prencha uma Data de Nascimento válida ', headerMessage: 'Ops, há pendencias de preenchimento:' });
			return;
		}
	}

	function mudarCidade(city){
		const filtered = lojas.filter(x => x.cidade === city.nome);
		setLojasFiltradas(filtered);
	};

	function mudarLoja(loja){
		if(loja.codLoja !== '0'){
			setMostrarFormulario(true);
		}
	}

	function mudarSexo(sexo){
		setSexoBebe(sexo.value);
	}

	function mudarEmpresa(empresas){
		setEmpresa(empresas.id);
	}


	return (
		<div className="App">
			<HelmetProvider>
				<Helmet>
					<title>Baby+ Convênio</title>
				</Helmet>
			</HelmetProvider>
			
			<header className="App-header">
				<img src='/images/convenio.jpeg' className="logo" alt="logo" />
			</header>
			<div className="App-body">
                <ToastContainer />
				{/* CADASTRE-SE */}
				<div className="col-md-6 col-12">
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
									onChange={city => mudarCidade(city)}
									/>
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className="custom-form-group mt-10 form-group">
								<div className="col-sm-1">
									<label className="form-label negrito">Loja*</label>
								</div>
								<Select className="basic-single" options={lojasFiltradas} 
									getOptionLabel={(lojasFiltradas)=>lojasFiltradas.endereco}
									getOptionValue={(lojasFiltradas)=>lojasFiltradas.id}
									placeholder="Selecione uma loja"
									onChange={loja => mudarLoja(loja)}
									/>
							</div>
						</div>
					</div>
					{mostrarFormulario ? 
						<div className="row">
							{/* NOME E CPF */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<Input label="Nome Completo*" required={true} placeholder="Digite seu nome" onChange={setNome} />
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<Input label="CPF*" required={true} placeholder="000.000.000-00" onChange={setCpf} mascara="true" mask="999.999.999-99" inputMode="numeric" onBlur={validarCpf} />
								</div>
							</div>
							{/* TELEFONE E EMPRESA */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
									<Input label="Telefone (WhatsApp)*" required={true} placeholder="(00) 00000-0000" onChange={setTelefone} mascara="true" mask="(99)99999-9999" inputMode="numeric" onBlur={validarTelefone}/>
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
										onChange={empresas => mudarEmpresa(empresas)}
										/>
								</div>
							</div>
							{empresa === '1' ? 
							<div className="col-md-12 col-12">
								<div className="custom-form-group mt-10 form-group">
									<Input label="Empresa onde trabalha ou como conheceu o benefício*" required={true} onChange={setEmpresaOndeTrabalha} />
								</div>
							</div>
							: null }
							{/* EMAIL E DATA DE NASCIMENTO */}
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
								<Input label="Email*" required={true} placeholder="seuemail@email.com" onChange={setEmail} inputMode="email"/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group mt-10 form-group">
								<Input label="Data de Nascimento*" required={true} onChange={setNascimento} mascara="true" mask="99/99/9999" inputMode="numeric" onBlur={validarNascimento}/>
								</div>
							</div>
						</div>
					: null}
				</div>
				{/* OUTRAS INFORMAÇÕES */}
				{mostrarFormulario ? 
					<div className="col-md-6 col-12 mt-10">
						<div className="linha">
							<div className="col-sm-3 underline"></div>
							<label className="col-sm-6 negrito">Outras informações</label>
							<div className="col-sm-3 underline"></div>
						</div>
					</div>
				: null}
				{/* ESTA GESTANTE */}
				{mostrarFormulario ? 
					<div className="pt-3 col-md-6 col-12">
						<div className="linha">
							<div className="left">
								<input type="checkbox" onChange={(e) => setIsGestante(e.target.checked)}/>
								<label className="form-label ml-1 black">Está gestante?</label>
							</div>
						</div>
						{isGestante ? 
							<div className="row mb-2">
								<div className="col-md-6 col-12">
									<div className="custom-form-group mt-10 form-group">
									<Input label="Quantas Semanas*" required={true} onChange={setSemanas} type="number" inputMode="numeric" />
									</div>
								</div>
								<div className="col-md-6 col-12">
									<div className="custom-form-group mt-10 form-group">
									<Input label="Previsão do parto*" required={true} onChange={setPrevisao} mascara="true" mask="99/99/9999" inputMode="numeric" onBlur={validarNascimento}/>
									</div>
								</div>
								<div className="col-md-6 col-12">
									<div className="custom-form-group mt-10 form-group">
									<Input label="Nome do bebê" onChange={setNomeBebe} placeholder="Digite o nome"/>
									</div>
								</div>
								<div className="col-md-6 col-12">
									<div className="custom-form-group mt-10 form-group">
										<div className="col-sm-1">
											<label className="form-label negrito">Sexo*</label>
										</div>
										<Select className="basic-single" options={sexo} 
											getOptionLabel={(sexo)=>sexo.value}
											getOptionValue={(sexo)=>sexo.id}
											placeholder="Selecione o sexo"
											onChange={sexo => mudarSexo(sexo)}
											/>
									</div>
								</div>
							</div>
						: null}
						<div className="linha">
							<div className="left">
								<input type="checkbox" onChange={(e) => setHasDependentes(e.target.checked)}/>
								<label className="form-label ml-1 black">Possui Dependentes?</label>
							</div>
						</div>
					</div>
				: null}
				{/* PARA FINALIZAR */}
				{mostrarFormulario ? 
					<div className="col-md-6 col-12 mt-10">
						<div className="linha">
							<div className="col-sm-3 underline"></div>
							<label className="col-sm-6 negrito">para finalizar, defina sua senha</label>
							<div className="col-sm-3 underline"></div>
						</div>
					</div>
				: null }
				{/* SENHA */}
				{mostrarFormulario ? 
					<div className="m-auto pt-3 col-md-6 col-12">
						<div className="row">
							<div className="col-md-6 col-12">
								<div className="custom-form-group form-group">
									<Input label="Senha*" onChange={setSenha} type="password"/>
								</div>
							</div>
							<div className="col-md-6 col-12">
								<div className="custom-form-group form-group">
									<Input label="Confirmar Senha*" onChange={setConfirmaSenha} type="password"/>
								</div>
							</div>
							<div className="linha">
								<div className="mt-10">
									<input type="checkbox" onChange={(e) => setAceitoTermo(e.target.checked)}/>
									<label className="form-label ml-1 black termos">
										Ao finalizar, você concorda com nossos <a href="https://aprincipalbb.com.br/termos-de-uso.php" target="_blank" rel="noreferrer">Termos de uso</a> e <a href="https://aprincipalbb.com.br/politica-de-privacidade.php" target="_blank" rel="noreferrer">Política de privacidade</a>
									</label>
								</div>
							</div>
							<div className="linha">
								<button className="botao mt-10" onClick={() => validar()}>Finalizar</button>
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

export default App;


