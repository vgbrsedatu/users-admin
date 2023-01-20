/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages AuthError module, used to create all errors specific to
 * the Firebase Auth service interface.
 */

// ━━	CONSTANTS	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * All errors specific to the Firebase Auth service interface.
 *
 * @constant {object} codes
 */
const codes = {
  'auth/claims-too-large':
    'La carga útil del reclamo que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.',
  'auth/id-token-expired': 'El token de ID de Firebase que se proporcionó venció.',
  'auth/id-token-revoked': 'Se revocó el token de ID de Firebase.',
  'auth/invalid-argument':
    'Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debería incluir información adicional.',
  'auth/invalid-claims':
    'Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.',
  'auth/invalid-continue-uri': 'La URL de continuación debe ser una string de URL válida.',
  'auth/invalid-creation-time':
    'La hora de creación debe ser una string de fecha en formato UTC válida.',
  'auth/invalid-disabled-field':
    'El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.',
  'auth/invalid-display-name':
    'El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.',
  'auth/invalid-dynamic-link-domain':
    'El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.',
  'auth/invalid-email-verified':
    'El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.',
  'auth/invalid-email':
    'El valor que se proporcionó para la propiedad de usuario email no es válido. Debe ser una dirección de correo electrónico de string.',
  'auth/invalid-hash-algorithm':
    'El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.',
  'auth/invalid-hash-block-size': 'El tamaño del conjunto de hash debe ser un número válido.',
  'auth/invalid-hash-derived-key-length':
    'La longitud de la clave derivada de hash debe ser un número válido.',
  'auth/invalid-hash-key': 'La clave de hash debe ser un búfer de bytes válido.',
  'auth/invalid-hash-memory-cost': 'El costo de la memoria de hash debe ser un número válido.',
  'auth/invalid-hash-parallelization': 'La paralelización de hash debe ser un número válido.',
  'auth/invalid-hash-rounds': 'Las rondas de hash deben ser un número válido.',
  'auth/invalid-hash-salt-separator':
    'El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.',
  'auth/invalid-id-token':
    'El token de ID que se proporcionó no es un token de ID de Firebase válido.',
  'auth/invalid-last-sign-in-time':
    'La hora del último acceso debe ser una string de fecha en formato UTC válida.',
  'auth/invalid-page-token':
    'El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.',
  'auth/invalid-password':
    'El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.',
  'auth/invalid-password-hash': 'El hash de contraseñas debe ser un búfer de bytes válidos.',
  'auth/invalid-password-salt': 'La contraseña con sal debe ser un búfer de bytes válidos.',
  'auth/invalid-phone-number':
    'El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.',
  'auth/invalid-photo-url':
    'El valor que se proporcionó para la propiedad de usuario photoURL no es válido. Debe ser una URL de string.',
  'auth/invalid-provider-data': 'providerData debe ser una serie de objetos UserInfo.',
  'auth/invalid-provider-id':
    'providerId debe ser una string del identificador del proveedor compatible válida.',
  'auth/invalid-session-cookie-duration':
    'La duración de las cookies de la sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.',
  'auth/invalid-uid':
    'El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.',
  'auth/invalid-user-import': 'El registro de usuarios para importar no es válido.',
  'auth/maximum-user-count-exceeded':
    'Se excedió el número máximo de usuarios permitidos para importar.',
  'auth/missing-android-pkg-name':
    'Se debe proporcionar un nombre de paquete de Android si es necesario instalar la app para Android.',
  'auth/missing-continue-uri':
    'Se debe proporcionar una URL de continuación válida en la solicitud.',
  'auth/missing-hash-algorithm':
    'Es necesario proporcionar el algoritmo de hash y sus parámetros para importar usuarios con hash de contraseñas.',
  'auth/missing-ios-bundle-id': 'La solicitud debe contener un ID del paquete de iOS.',
  'auth/missing-uid': 'Se requiere un identificador uid para la operación actual.',
  'auth/reserved-claims':
    'Uno o más de los reclamos personalizados de usuarios que se entregaron a setCustomUserClaims() están reservados. Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados.',
  'auth/session-cookie-expired': 'La cookie proporcionada de la sesión de Firebase venció.',
  'auth/session-cookie-revoked': 'Se revocaron las cookies de la sesión de Firebase.',
  'auth/uid-already-exists':
    'Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.',
  'auth/unauthorized-continue-uri':
    'El dominio de la URL de continuación no está en la lista blanca. Inclúyelo a la lista en Firebase console.',
  'auth/email-already-exists':
    'Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.',
  'auth/user-not-found':
    'No existe ningún registro de usuario que corresponda al identificador proporcionado.',
  'auth/operation-not-allowed':
    'El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.',
  'auth/invalid-credential':
    'La credencial que se usa en la autenticación de los SDK de Admin no se puede emplear para realizar la acción deseada. Algunos métodos de autenticación como createCustomToken() y verifyIdToken() requieren que los SDK se inicialicen con una credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializar el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado.',
  'auth/phone-number-already-exists':
    'Otro usuario ya está utilizando el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.',
  'auth/project-not-found':
    'No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de administrador. Consulta Cómo agregar Firebase a tu app para ver la documentación sobre cómo generar una credencial para tu proyecto y usarla para autenticar los SDK de Admin.',
  'auth/insufficient-permission':
    'La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de autenticación solicitado. Consulta Cómo agregar Firebase a tu app para ver la documentación sobre cómo generar una credencial con permisos apropiados y usarla para autenticar los SDK de Admin.',
  'auth/internal-error':
    'El servidor de autenticación encontró un error inesperado al tratar de procesar la solicitud. El mensaje de error debe contener la respuesta del servidor de autenticación que contiene información adicional. Si el error persiste, informa el problema a nuestro canal de asistencia de informe de errores. ',
};
// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `AuthError` classs is the base class for all errors specific to
 * the Firebase Auth service interface.
 *
 * @class    AdminError
 * @augments Error
 * @private
 */
class AuthError extends Error {
  /**
   * Creates an instance of AdminError.
   *
   * The `constructor` method requires the `code` parameter.
   *
   * The `code` parameter must be type `string` or `function`. If
   * a function is passed as a parameters, necessary to execute the function
   * must be passed as the second parameter in the constructor, if the result of
   * the function is not of type `string`, it will throw a `TypeError`.
   *
   * @memberof  AdminError
   * @param     {string|Function} code - AuthError's message.
   * @example const ERROR = const DYNAMIC_ERROR = new AuthError('auth/project-not-found');
   *
   */
  constructor(code) {
    const message = AuthError.codes[code] || AuthError.defaults;
    super(message);
    this.name = 'AuthError';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthError);
    }
  }

  /**
   * Default error message to the Firebase Auth service interface.
   *
   * @static
   * @memberof AuthError
   */
  static defaults = 'Algo salió mal en la autentificación, vuelva a intentar';

  /**
   * All errors specific to the Firebase Auth service interface.
   *
   * @static
   * @memberof AuthError
   */
  static codes = codes;
}

// ━━	EXPORT MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default AuthError;
