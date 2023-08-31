export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,20}$/ // TODO eslint remove /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,20}$/
export const passwordPatternError =
  'Password must contain 1-9;A-Z;a-z;! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _`{ | } ~'
