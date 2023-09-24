import { VenturoMenuSuperior } from "./venturo_menu_superior.js";
import { VenturoFooter } from "./venturo_footer.js";
import { VenturoAnuncio } from "./venturo_anuncio.js";
import { VenturoSumarioRegras } from "./venturo_sumario_regras.js";
import { VenturoSumarioUniverso } from "./venturo_sumario_universo.js";
import { VenturoSumarioCriacao } from "./venturo_sumario_criacao.js";
import { VenturoSumarioWorldBuilding } from "./venturo_sumario_wb.js";
import { RaphaelCardFooter } from "./raphael_card_footer.js";

customElements.define('venturo-menu-superior', VenturoMenuSuperior);
customElements.define('venturo-footer', VenturoFooter);
customElements.define('venturo-anuncio', VenturoAnuncio);
customElements.define('venturo-sumario-regras', VenturoSumarioRegras);
customElements.define('venturo-sumario-universo', VenturoSumarioUniverso);
customElements.define('venturo-sumario-criacao', VenturoSumarioCriacao);
customElements.define('venturo-sumario-wb', VenturoSumarioWorldBuilding);
customElements.define('raphael-card-footer', RaphaelCardFooter);

