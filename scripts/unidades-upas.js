// Dados das UPAs
const upasData = [
    {
        id: "sao-cristovao",
        nome: "UPA 24h São Cristovão",
        endereco: "Rua Arquiteto Marcos Moreira Solter, São Cristóvão, Salvador, Bahia",
        telefone: "(71) 3273-4690",
        horario: "24 horas (atendimento odontológico das 7h às 19h)",
        servicos: [
            "Atendimento de urgência e emergência",
            "Atendimento odontológico de urgência (7h às 19h)",
            "Drenagem de abscessos",
            "Cimentação provisória de prótese dentária",
            "Contenção de hemorragia gengival"
        ],
        imagem: "/imgs-upas/sao_cristovao.webp",
        coordenadas: {
            lat: -12.9135, 
            lng: -38.3590
        }
    },
    {
        id: "adroaldo-albergaria",
        nome: "UPA 24h Professor Adroaldo Albergaria",
        endereco: "Rua das Pedrinhas, S/N, Periperi, Salvador, Bahia",
        telefone: "(71) 3611-5721/5719",
        horario: "24 horas (atendimento odontológico das 7h às 19h)",
        servicos: [
            "Atendimento de urgência e emergência",
            "Consulta Ambulatorial",
            "Apoio Diagnóstico (Raios X, Ultrassonografia, Análises Clínicas)",
            "Entrega e Dispensação de Medicamentos",
            "Atendimento odontológico de urgência (7h às 19h)"
        ],
        imagem: "/imgs-upas/upa_paripe_1.jpeg",
        coordenadas: {
            lat: -12.8673, 
            lng: -38.4583
        }
    },
    {
        id: "vale-dos-barris",
        nome: "UPA 24h Vale dos Barris",
        endereco: "Avenida Centenário, Rotatória dos Barris, Salvador, Bahia",
        telefone: "",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Exames laboratoriais",
            "Raios X",
            "Ultrassonografia",
            "Eletrocardiograma",
            "Atendimento pediátrico especializado (UPA Pediátrica anexa)"
        ],
        imagem: "/imgs-upas/upa_vale_barris_1.jpeg",
        coordenadas: {
            lat: -12.9921, 
            lng: -38.5101
        }
    },
    {
        id: "piraja-santo-inacio",
        nome: "UPA 24h Pirajá/Santo Inácio",
        endereco: "Rua Direta de Santo Inácio, Jardim Santo Inácio, Salvador, Bahia",
        telefone: "+55 71 3961-0010",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento ortopédico",
            "Atendimento odontológico",
            "Enfermagem",
            "Nutrição",
            "Farmácia comunitária"
        ],
        imagem: "/imgs-upas/upa_piraja_santo_inacio_1.jpeg",
        coordenadas: {
            lat: -12.9268, 
            lng: -38.4326
        }
    },
    {
        id: "paripe",
        nome: "UPA de Paripe",
        endereco: "Rua São Luís, s/n, Paripe, Salvador, Bahia",
        telefone: "(71) 9 9700-4240",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento ortopédico",
            "Atendimento odontológico",
            "Enfermagem",
            "Serviço social",
            "Nutrição"
        ],
        imagem: "/imgs-upas/upa_paripe_1.jpeg",
        coordenadas: {
            lat: -12.8467, 
            lng: -38.4793
        }
    },
    {
        id: "brotas",
        nome: "UPA dos Brotas",
        endereco: "Rua Jardim Madalena, 461, Brotas, Salvador, Bahia",
        telefone: "(71) 3018-1212",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento ortopédico",
            "Atendimento odontológico",
            "Atendimento cirúrgico",
            "Enfermagem"
        ],
        imagem: "/imgs-upas/upa_brotas_1.jpeg",
        coordenadas: {
            lat: -12.9814, 
            lng: -38.4841
        }
    },
    {
        id: "valeria",
        nome: "UPA 24h Valéria",
        endereco: "Rua do Lavrador, s/n, Valéria, Salvador, Bahia",
        telefone: "",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento psiquiátrico 24h",
            "Atendimento multiprofissional",
            "Base local do SAMU"
        ],
        imagem: "/imgs-upas/upa_valeria_1.jpeg",
        coordenadas: {
            lat: -12.8651, 
            lng: -38.4426
        }
    },
    {
        id: "san-martin",
        nome: "UPA 24h San Martin",
        endereco: "Rua do Forno, s/n, Santa Mônica, Salvador, Bahia",
        telefone: "(71) 3018-1212",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento ortopédico",
            "Atendimento odontológico",
            "Enfermagem",
            "Serviço social"
        ],
        imagem: "/imgs-upas/upa_san_marthis.jpg",
        coordenadas: {
            lat: -12.9435, 
            lng: -38.4702
        }
    },
    {
        id: "santo-antonio",
        nome: "UPA 24H Cidade Baixa do Santo Antônio",
        endereco: "Av. Dendezeiros do Bonfim, 161, Bonfim, Salvador, Bahia",
        telefone: "(71) 3877-3900",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Medicina Clínica",
            "Pediatria",
            "Ortopedia",
            "Psiquiatria",
            "Cirurgia Geral",
            "Enfermagem"
        ],
        imagem: "/imgs-upas/upa_santo_antonio_1.jpeg",
        coordenadas: {
            lat: -12.9248, 
            lng: -38.5071
        }
    },
    {
        id: "itapoa",
        nome: "UPA 24h Itapoã (Hélio Machado)",
        endereco: "Rua da Cacimba, s/n, Itapuã, Salvador, Bahia",
        telefone: "",
        horario: "24 horas (atendimento odontológico 24h)",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento odontológico de urgência 24h",
            "Enfermagem",
            "Serviço social",
            "Farmácia"
        ],
        imagem: "/imgs-upas/upa_helio_machado.jpeg",
        coordenadas: {
            lat: -12.9478, 
            lng: -38.3539
        }
    },
    {
        id: "cabula",
        nome: "UPA Cabula",
        endereco: "Rua Direta do Saboeiro s/n, Cabula, Salvador, Bahia",
        telefone: "(71) 3387-3404 / 4745",
        horario: "24 horas",
        servicos: [
            "Atendimento de urgência e emergência 24 horas",
            "Atendimento clínico adulto e pediátrico",
            "Atendimento oftalmológico (único em Salvador)",
            "Enfermagem",
            "Serviço social",
            "Farmácia"
        ],
        imagem: "/imgs-upas/upa_cabula_1.png",
        coordenadas: {
            lat: -12.9614, 
            lng: -38.4641
        }
    }
];

function createUpaCards() {
    const container = document.getElementById('upas-list');
    
    if (container) {
        container.innerHTML = '';
        
        upasData.forEach(upa => {
            const card = document.createElement('div');
            card.className = 'upa-card';
            
            let imageSrc = upa.imagem;
            const img = new Image();
            img.onerror = function() {
                imageSrc = 'images/upa_default.jpg';
            };
            img.src = imageSrc;
            
            const servicosHTML = upa.servicos.slice(0, 5).map(servico => 
                `<li>${servico}</li>`
            ).join('');
            
            card.innerHTML = `
                <div class="upa-image">
                    <img src="${imageSrc}" alt="${upa.nome}">
                </div>
                <div class="upa-info">
                    <h3 class="upa-name">${upa.nome}</h3>
                    <div class="upa-address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${upa.endereco}</span>
                    </div>
                    ${upa.telefone ? `
                    <div class="upa-phone">
                        <i class="fas fa-phone"></i>
                        <span>${upa.telefone}</span>
                    </div>` : ''}
                    <div class="upa-hours">
                        <i class="fas fa-clock"></i>
                        <span>${upa.horario}</span>
                    </div>
                    <div class="upa-services">
                        <h4>Serviços Oferecidos:</h4>
                        <ul>
                            ${servicosHTML}
                        </ul>
                    </div>
                    <!-- Removi a div do mapa -->
                    <div class="upa-actions">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${upa.coordenadas.lat},${upa.coordenadas.lng}" target="_blank" class="upa-button">Como Chegar</a>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    } else {
        console.error("Container 'upas-list' não encontrado!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const integrationStyles = document.createElement('link');
    integrationStyles.rel = 'stylesheet';
    integrationStyles.href = '/upas.css';
    document.head.appendChild(integrationStyles);
    
    createUpaCards();
});