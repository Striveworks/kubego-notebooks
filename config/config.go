package config

import (
	"log"
	"strings"

	"github.com/spf13/viper"
)

type Configuration struct {
	Server            ServerConfiguration
	CORS              CORSConfiguration
	InCluster         bool
	SpawnerConfigPath string
	Ingress           IngressConfiguration
}

type CORSConfiguration struct {
	Enabled                       bool
	AccessControlAllowOrigin      string
	AccessControlAllowCredentials string
	AccessControlAllowHeaders     string
	AccessControlAllowMethods     string
}

type ServerConfiguration struct {
	Address   string
	ApiPrefix string
}

type IngressConfiguration struct {
	Create      bool
	Domain      string
	Tls         bool
	Annotations map[string]string
}

var (
	Config Configuration
)

func Init() {
	viper.SetEnvPrefix("env")
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	viper.AutomaticEnv()
	viper.SetDefault("environment", "local")

	viper.SetConfigName(viper.GetString("environment"))

	viper.AddConfigPath(".")
	viper.AddConfigPath("../config/")
	viper.AddConfigPath("/etc/notebooks/")

	viper.AddConfigPath("config/")
	viper.SetConfigName(viper.GetString("environment"))
	viper.SetConfigType("yaml")
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatal(err)
	}

	err = viper.Unmarshal(&Config)

	if err != nil {
		log.Fatal(err)
	}

}
