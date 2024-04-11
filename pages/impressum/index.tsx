import getInfo from "@/services/get_info"
import { Fragment } from 'react';
import style from '@/style_modules/impressum.module.css'

export default function _(props:any)
{
    let aboutMe = props.aboutMe;
    return (<Fragment>
            <h1 className={style.title}>Resume</h1>
            <div className={style.container}>
              <div className={style.box}>
                
                <h3 className={style.header}><strong>Angaben gemäß § 5 TMG:</strong></h3>
                <br />
                <div className={style.text_block}>
                  <p>{aboutMe.name}</p>
                  <p>{aboutMe.street}</p>
                  <p>{aboutMe.plz}</p>
                </div>
                <hr className={style.break_line}/>
                <h3 className={style.header}><strong>Kontakt:</strong></h3>
                <br />
                <div className={style.text_block}>
                  <p>Telefon: {aboutMe.tel}</p>
                  <p>E-Mail: {aboutMe.email}</p>
                </div>
                <hr className={style.break_line}/>
                <h3 className={style.header}><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></h3>
                <br />
                <div className={style.text_block}>
                  <p>{aboutMe.name}</p>
                  <p>{aboutMe.street}</p>
                  <p>{aboutMe.plz}</p>
                </div>
                <hr className={style.break_line}/>
                <h3 className={style.header}><strong>Haftungsausschluss:</strong></h3>
                <br />
                <div className={style.text_block}>
                  <p>
                    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt und dienen ausschließlich als
                    persönliches Portfolio/CV. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme
                    ich jedoch keine Gewähr. Als Privatperson bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf dieser
                    Seite verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Privatperson jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                    die auf eine rechtswidrige Tätigkeit hinweisen. Die Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                    diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
                    Inhalte umgehend entfernen.
                  </p>
                </div>
                <hr className={style.break_line}/>
                <h3 className={style.header}><strong>Urheberrecht:</strong></h3>
                <br />
                <div className={style.text_block}>
                  <p>
                    Die durch mich erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen
                    Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                    Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur
                    für
                    den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von
                    mir
                    erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Solltest
                    du
                    trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden
                    Hinweis.
                    Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                  </p>
                </div>
                <hr className={style.break_line}/>
                <h3 className={style.header}><strong>Datenschutz:</strong></h3>
                <br />
                <div className={style.text_block}>
                <p>
                  Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                  meiner Seite personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben
                  werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne deine
                  ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        
                  Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                  nicht möglich.
        
                  Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten
                  wie Postanschriften, Telefon- und Faxnummern sowie E-Mail-Adressen durch Dritte zur Übersendung von
                  nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die
                  Versender von sogenannten Spam-Mails bei Verstößen gegen dieses Verbot sind ausdrücklich
                  vorbehalten.
        
                  Dieses Impressum gilt auch für meine Social-Media-Profile (falls zutreffend) und meine dort
                  hinterlegten Kontaktdaten.
                </p>
                </div>
              </div>
            </div>
          </Fragment>
    )
}

export async function getServerSideProps(ctx:any)
{
    console.log()
    const aboutMe = await getInfo('http://'+ctx.req.headers.host);

    return {
        props: {
            aboutMe
        }
    }
}