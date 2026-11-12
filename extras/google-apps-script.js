const PLANILHA_ID = "1ZwouzGanLIbzyvQR1HQMlZSwml-qXr9Ap9bg_OdQzhw";
// Cole este código em: Planilha Google > Extensões > Apps Script
// Depois: Implantar > Nova implantação > Tipo: App da Web
// Executar como: Eu | Quem pode acessar: Qualquer pessoa
// Copie a URL gerada e cole no index.html, na linha: const ENDPOINT = "";

function doPost(e) {
  const aba = SpreadsheetApp.openById(PLANILHA_ID).getSheets()[0];
  if (aba.getLastRow() === 0) {
    aba.appendRow(["Data e hora", "Nome", "WhatsApp", "E-mail", "Origem", "Página"]);
  }
  const p = e.parameter;
  aba.appendRow([Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss"), p.nome || "", "'" + (p.whatsapp || ""), p.email || "", p.origem || "", p.pagina || ""]);
  return ContentService.createTextOutput("ok");
}
