# Excalidraw File Creator

**Excalidraw File Creator** is a Visual Studio Code extension that lets you quickly create and open `.excalidraw.png` files. This extension integrates seamlessly with the **[Excalidraw](https://github.com/excalidraw/excalidraw)** extension for VS Code.

## Features

- **Quick File Creation:** Create `.excalidraw.png` files by simply entering a file name.
- **Flexible Save Locations:**
  - Save files to your **Desktop**.
  - Save files to your **Documents** directory.
  - Choose a **Custom Location** for the file.
- **Automatic Opening:** Automatically opens the newly created file in VS Code.

## Integration with Excalidraw

This extension works in conjunction with the **Excalidraw extension** for VS Code. To use it, create an empty file with a `.excalidraw`, `.excalidraw.json`, `.excalidraw.svg`, or `.excalidraw.png` extension, and open it in Visual Studio Code.

If you haven't already, install the **[Excalidraw VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Excalidraw.excalidraw)** to work with your files directly inside VS Code.

You can also try the **Excalidraw Web Version** here: [https://excalidraw.com/](https://excalidraw.com/).

## How to Use

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Search for and run the command:  
   **`Create Excalidraw File`**.
3. Enter the desired file name.
4. Select where to save the file:
   - `Document Directory`: Saves the file to your `Documents` folder.
   - `Desktop Directory`: Saves the file to your `Desktop`.
   - `Custom Location`: Prompts you to select a folder.
5. The file is created and automatically opened in VS Code.

## Installation

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Run `npm install` to install dependencies.
4. Press `F5` to launch the extension in a new VS Code window.
5. Optionally, package the extension and install it from the `.vsix` file.

## Requirements

- **[Excalidraw VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Excalidraw.excalidraw)** (installed and enabled).
- Node.js installed for development.
- VS Code installed.

## Example Workflow

1. Enter `my-drawing` as the file name.
2. Choose `Desktop Directory` as the save location.
3. The extension creates `my-drawing.excalidraw.png` on your desktop and opens it in VS Code.
4. Open the file in VS Code using the Excalidraw extension to start editing it.

## Future Features (Ideas)

- Add support for pre-configured default save locations.
- Integration with Excalidraw web app or API.
- Autosave support (on a user opt-in basis).

## License

This extension is open-source and licensed under the [MIT License](LICENSE).
