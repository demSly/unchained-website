import PropTypes from 'prop-types';
import { withProps, compose, getContext } from 'recompose';
import SimpleSchema from 'simpl-schema';

const regExpMessages = {
  de: [
    { exp: SimpleSchema.RegEx.Email.toString(), msg: 'muss eine gültige Email-Adresse sein' },
    { exp: SimpleSchema.RegEx.EmailWithTLD.toString(), msg: 'muss eine gültige Email-Adresse sein' },
    { exp: SimpleSchema.RegEx.Domain.toString(), msg: 'muss eine gültige Domain sein' },
    { exp: SimpleSchema.RegEx.WeakDomain.toString(), msg: 'muss eine gültige Domain sein' },
    { exp: SimpleSchema.RegEx.IP.toString(), msg: 'muss eine gültige IPv4 or IPv6-Adresse sein' },
    { exp: SimpleSchema.RegEx.IPv4.toString(), msg: 'muss eine gültige IPv4-Adresse sein' },
    { exp: SimpleSchema.RegEx.IPv6.toString(), msg: 'muss eine gültige IPv6-Adresse sein' },
    { exp: SimpleSchema.RegEx.Url.toString(), msg: 'muss eine gültige URL sein' },
    { exp: SimpleSchema.RegEx.Id.toString(), msg: 'muss eine gültige alphanumerische ID sein' },
    { exp: SimpleSchema.RegEx.ZipCode.toString(), msg: 'muss eine gültige Postleitzahl sein' },
    { exp: SimpleSchema.RegEx.Phone.toString(), msg: 'muss eine gültige Telefonnummer sein' },
  ],
};

const defaultMessages = [];
const regExTranslator = (lang, defaultMsg) => ({ label, regExp }) => {
  let msgObj = null;
  if (regExp) {
    const regExTranslationTable = ((regExpMessages && regExpMessages[lang]) || defaultMessages);
    msgObj = regExTranslationTable.reduce((oldValue, current) => {
      if (current.exp === regExp) {
        return current;
      }
      return oldValue;
    }, null);
  }
  const regExpMessage = msgObj ? msgObj.msg : defaultMsg;
  return `${label} ${regExpMessage}`;
};

SimpleSchema.setDefaultMessages({
  messages: {
    de: {
      required: '{{{label}}} ist ein Pflichtfeld',
      minString: '{{{label}}} muss mindestens {{min}} Zeichen lang sein',
      maxString: '{{{label}}} darf nicht länger als {{max}} Zeichen lang sein',
      minNumber: '{{{label}}} muss gleich oder grösser sein als {{min}}',
      maxNumber: '{{{label}}} muss kleiner oder gleich sein als {{max}}',
      minNumberExclusive: '{{{label}}} muss grösser sein als {{min}}',
      maxNumberExclusive: '{{{label}}} muss kleiner sein als {{max}}',
      minDate: '{{{label}}} muss an oder vor {{min}} sein',
      maxDate: '{{{label}}} darf nicht nach {{max}} sein',
      badDate: '{{{label}}} ist kein gültiges Datum',
      minCount: '{{{label}}}: Mindestens {{minCount}} Werte eingeben',
      maxCount: '{{{label}}}: Maximal {{maxCount}} Werte eingeben',
      noDecimal: '{{{label}}} muss eine Ganzzahl sein',
      notAllowed: '{{{value}}} ist nicht erlaubt als Wert',
      expectedType: '{{{label}}} muss vom Typ {{dataType}} sein',
      regEx: regExTranslator('de', 'Die Eingabe wurde bei der Überprüfung durch einen regulären Ausdruck für ungültig erklärt'),
      keyNotInSchema: '{{name}} als Key ist nicht erlaubt',
    },
    fr: {
      required: '{{{label}}}: Veuillez saisir quelque chose',
      minString: '{{{label}}}: Veuillez saisir au moins {{min}} caractères',
      maxString: '{{{label}}}: Veuillez saisir moins de {{max}} caractères',
      minNumber: '{{{label}}}: Ce champ doit être superieur ou égal à {{min}}',
      maxNumber: '{{{label}}}: Ce champ doit être inferieur ou égal à {{max}}',
      minNumberExclusive: '{{{label}}}: Ce champ doit être superieur à {{min}}',
      maxNumberExclusive: '{{{label}}}: Ce champ doit être inferieur à {{max}}',
      minDate: '{{{label}}}: La date doit est posterieure au {{min}}',
      maxDate: '{{{label}}}: La date doit est anterieure au {{max}}',
      badDate: '{{{label}}}: Cette date est invalide',
      minCount: '{{{label}}}: Vous devez saisir plus de {{minCount}} valeurs',
      maxCount: '{{{label}}}: Vous devez saisir moins de {{maxCount}} valeurs',
      noDecimal: '{{{label}}}: Ce champ doit être un entier',
      notAllowed: "{{value}} n'est pas une valeur acceptée",
      expectedType: '{{{label}}}: Ce champ doit être du type {{dataType}}',
      regEx: regExTranslator('fr', " n'est pas valide"),
      keyNotInSchema: "{{{label}}}: Le champ {{name}} n'est pas permis par le schéma",
    },
  },
});

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

export default schemaDefinition => compose(
  getContext({
    locale: PropTypes.string,
  }),
  withProps((props) => {
    const schema = new SimpleSchema((isFunction(schemaDefinition) ?
      schemaDefinition(props) :
      schemaDefinition));
    const { locale } = props;
    schema.messageBox.setLanguage(locale.split('-')[0]);
    return {
      schema,
    };
  }),
);
