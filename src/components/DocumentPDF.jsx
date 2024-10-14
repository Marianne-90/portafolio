import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

import { data } from "../data/data.js";

import qr from "../img/bunnyqr.png";
import pp from "../img/foto_formal.png";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  containerBottomBorder: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    alignItems: "stretch",
    paddingBottom: "5px",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    minWidth: "300px",
  },
  name: {
    fontSize: 24,
    fontFamily: "Lato Bold",
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    fontFamily: "Lato",
    textTransform: "uppercase",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  linkqr: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
  },

  greyContainer: {
    flexDirection: "column",
    backgroundColor: "#F3F4F6",
    padding: "15px",
  },
  aboutMe: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textTransform: "uppercase",
  },
  aboutMeText: {
    fontSize: 10,
    fontFamily: "Lato",
  },

  mainSubTitle: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 10,
    fontFamily: "Lato",
  },

  textItalic: {
    fontSize: 10,
    fontFamily: "Lato Italic",
  },

  basicContainer: {
    flexDirection: "column",
    marginBottom: "5px",
    padding: "0px 15px",
    alignItems: "stretch",
  },

  halfContainer: {
    flexGrow: 6,
    minWidth: "110px",
    alignSelf: "center",
    margin: "5px 15px 5px 15px",
  },
  blockBorder: {
    marginRight: "5px",
    paddingRight: "5px",
    borderRightWidth: 1,
    borderRightStyle: "solid",
  },
  blockNotBorder: {
    marginRight: "5px",
    paddingRight: "5px",
  },
  // Estilos para la imagen circular
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
});

Font.register({
  family: "Open Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

function formatearNegritas(texto) {
  const partes = texto.split(/\*\*(.*?)\*\*/g); // Divide el string por las partes que están entre **

  return partes.map((parte, index) =>
    index % 2 === 1 ? (
      // Si es una parte impar (entre los asteriscos), la formateamos en negritas
      <Text key={index} style={{ fontFamily: "Lato Bold" }}>
        {parte}
      </Text>
    ) : (
      // Si es una parte par, es texto normal
      <Text key={index}>{parte}</Text>
    )
  );
}

export const DocumentPDF = () => {
  const { home, education, skillsData, proyects, jobs, contact } = data;
  const { name, description } = home;
  const { educationList, certifications, lenguaje } = education;

  const formattedPhoneNumber = contact.phone.replace(
    /^(\+\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,
    "$1 $2-$3-$4-$5-$6"
  );

  const shortSkills = (item) => {
    const parts = item.split(" - ");
    if (parts.length === 2) {
      const shortPart = parts[0];
      return shortPart;
    } else {
      return item;
    }
  };

  return (
    <Document
      author="Marianne Garrido Minutti"
      keywords="One happy developer's resume"
      subject="Marianne's resumme"
      title="Resumme"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.containerBottomBorder}>
          <Image src={pp} style={styles.profileImage} />
          <View style={styles.detailColumn}>
            <View style={styles.linkColumn}>
              <Text
                style={[
                  styles.name,
                  { alignSelf: "flex-end", justifySelf: "flex-end" },
                ]}
              >
                {name}
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  { alignSelf: "flex-end", justifySelf: "flex-end" },
                ]}
              >
                {contact.role}
              </Text>
              <Text style={styles.link}>
                <Link href={`mailto:${contact.mail}`} style={styles.link}>
                  {contact.mail}
                </Link>
                {"   "}
                <Link href={`tel:${contact.phone}`} style={styles.link}>
                  {formattedPhoneNumber}
                </Link>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.greyContainer}>
          <Text style={styles.aboutMe}>About Me</Text>
          <Text style={styles.aboutMeText}>{description}</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.halfContainer}>
            <Text style={styles.mainSubTitle}>Education</Text>
            {educationList.map((item, index) => (
              <Text key={index} style={styles.text}>
                - {item}
              </Text>
            ))}
          </View>
          <View
            style={[
              styles.halfContainer,
              {
                paddingLeft: "5px",
                borderLeftWidth: 1,
                borderLeftStyle: "solid",
              },
            ]}
          >
            <Text style={styles.mainSubTitle}>Lenguajes</Text>
            {lenguaje.map((item, index) => (
              <Text key={index} style={styles.text}>
                {item}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.basicContainer}>
          <Text style={[styles.mainSubTitle, { marginBottom: "5px" }]}>
            SKILLS
          </Text>
          <View
            style={[
              styles.container,
              {
                borderLeftWidth: 1,
                borderLeftStyle: "solid",
                paddingLeft: "5px",
              },
            ]}
          >
            {skillsData.map((item, index) => {
              return (
                <View key={index} style={[styles.blockBorder, { flexGrow: 4 }]}>
                  <Text style={[styles.subtitle, { fontFamily: "Lato Bold" }]}>
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {item.skills.map((item, index) => {
                      return (
                        <Text
                          key={index}
                          style={[
                            styles.text,
                            {
                              width: "100%", // Aseguramos que ocupe el 100% y permita el wrap
                              padding: "2px",
                              lineHeight: 1.2, // Ajusta la altura de la línea si es necesario
                            },
                          ]}
                        >
                          - {shortSkills(item)}
                        </Text>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.basicContainer}>
          <Text style={[styles.mainSubTitle, { marginBottom: "5px" }]}>
            Relevant Certifications
          </Text>
          <View
            style={[
              styles.container,
              {
                paddingLeft: "5px",
              },
            ]}
          >
            {certifications.map((item, index) => (
              <View
                key={index}
                style={[styles.blockNotBorder, { flexGrow: 4 }]}
              >
                <Text style={styles.subtitle}>{item.title}</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Text
                    style={[
                      styles.textItalic,
                      {
                        fontSize: "8px",
                        padding: "2px",
                        lineHeight: 1.2, // Ajusta la altura de la línea si es necesario
                        flexGrow: 1, // Permite que el texto crezca y se ajuste
                      },
                    ]}
                  >
                    {item.subtitle}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.basicContainer}>
          <Text
            style={[
              styles.mainSubTitle,
              { marginBottom: "5px", marginTop: "5px" },
            ]}
          >
            WORK EXPERIENCE
          </Text>
          {jobs.map((item, index) => (
            <View
              key={index}
              style={[
                {
                  marginBottom: "10px",
                  paddingBottom: "10px",
                  borderBottomWidth: 1,
                  borderBottomStyle: "solid",
                },
              ]}
            >
              <Text>
                <Text style={[styles.subtitle, { fontFamily: "Lato Bold" }]}>
                  {item.year}
                </Text>{" "}
                <Text style={styles.textItalic}>{item.company}</Text>
              </Text>
              <Text style={[styles.text, { fontFamily: "Lato Bold" }]}>
                {item.charge}
              </Text>
              {item.description.map((item, index) => {
                return (
                  <Text style={[styles.text, { marginTop: "3px" }]} key={index}>
                    - {formatearNegritas(item)}
                  </Text>
                );
              })}
            </View>
          ))}
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.mainSubTitle}>Visit my portafolio</Text>
          <Image src={qr} style={{ width: "150px" }} />
          <Link
            href="https://portafolio-marianne.netlify.app/"
            style={styles.linkqr}
          >
            portafolio-marianne.netlify.app
          </Link>
        </View>
      </Page>
    </Document>
  );
};
