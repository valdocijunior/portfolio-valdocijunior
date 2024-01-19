import Modal from "src/components/Modal";
import { primaryColors, backgroundColors } from "./data";
import BackgroundColor from "./BackgroundColor";
import PrimaryColor from "./PrimaryColor";
import "./theme.css";

const Theme = () => {
    return (
        <Modal className="theme_modal">
            <h3>Altere o tema do site!</h3>
            <small>
                Mude as cores primárias e as cores de fundo de acordo com a sua
                preferência.
            </small>
            <div className="theme_primary-wrapper">
                <h5>Cor Primária</h5>
                <div className="theme_primary-colors">
                    {primaryColors.map((pColor) => (
                        <PrimaryColor
                            key={pColor.className}
                            className={pColor.className}
                        />
                    ))}
                </div>
            </div>
            <div className="theme_background-wrapper">
                <h5>Cor do Background</h5>
                <div className="theme_background-colors">
                    {backgroundColors.map((bColor) => (
                        <BackgroundColor
                            key={bColor.className}
                            className={bColor.className}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default Theme;
