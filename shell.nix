with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "svelte-env";
  buildInputs = (with pkgs; [
    nodejs
    nodePackages.npm
  ]);
}
