{ pkgs }: {
	deps = [
		pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
    pkgs.graalvm17-ce
    pkgs.maven
    pkgs.replitPackages.jdt-language-server
    pkgs.replitPackages.java-debug
	];
}