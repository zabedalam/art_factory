import CardInfo from "./CardInfo";
import serviceIcon1 from "../../assets/images/service-icon-01.png";
import serviceIcon2 from "../../assets/images/service-icon-02.png";
import serviceIcon3 from "../../assets/images/service-icon-03.png";
import cardDetails from "../../data"

function Services() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme">
            {/* first box */}
            <CardInfo
              image={serviceIcon1}
              title={cardDetails.firstCard.title}
              info={cardDetails.firstCard.info}
              btnText={cardDetails.firstCard.btnText}
              link={cardDetails.firstCard.link}
            />

            {/* second box */}
            <CardInfo
              image={serviceIcon2}
              title={cardDetails.secondCard.title}
              info={cardDetails.secondCard.info}
              btnText={cardDetails.secondCard.btnText}
              link={cardDetails.secondCard.link}
            />

            {/* Third box */}
            <CardInfo
              image={serviceIcon3}
              title={cardDetails.thirdCard.title}
              info={cardDetails.thirdCard.info}
              btnText={cardDetails.thirdCard.btnText}
              link={cardDetails.thirdCard.link}
            />

            {/* Fourth service Box */}
            <CardInfo
              image={serviceIcon2}
              title={cardDetails.fourthCard.title}
              info={cardDetails.fourthCard.info}
              btnText={cardDetails.fourthCard.btnText}
              link={cardDetails.fourthCard.link}
            />

            {/* Fifth Service Box */}
            <CardInfo
              image={serviceIcon1}
              title={cardDetails.fifthCard.title}
              info={cardDetails.fifthCard.info}
              btnText={cardDetails.fifthCard.btnText}
              link={cardDetails.fifthCard.link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
