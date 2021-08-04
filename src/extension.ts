import * as vscode from "vscode";

/*
,
"configuration": {
  "title": "Clear Theme",
  "properties": {
    "clearTheme.showArrows": {
      "type": "boolean",
      "default": false,
      "description": "Show File Explorer folder arrows",
      "scope": "application"
    }
  }
}
*/

export function activate(context: vscode.ExtensionContext) {
  // Example: Overriding configuration value for a language
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "config.commands.overrideLanguageValue",
      async () => {
        // 1) Getting the languge id
        const languageId = await vscode.window.showInputBox({
          placeHolder: "Enter the language id",
        });

        // 2) Update
        vscode.workspace
          .getConfiguration("", { languageId: languageId! })
          .update("conf.language.showSize", true, false, true);
      }
    )
  );

  // Example: Listening to configuration changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("conf.resource.insertEmptyLastLine")) {
        if (vscode.window.activeTextEditor) {
          const currentDocument = vscode.window.activeTextEditor.document;

          // 1) Get the configured glob pattern value for the current file
          const value: any = vscode.workspace
            .getConfiguration("", currentDocument.uri)
            .get("conf.resource.insertEmptyLastLine");

          // 2) Check if the current resource matches the glob pattern
          const matches = value[currentDocument.fileName];

          // 3) If matches, insert empty last line
          if (matches) {
            vscode.window.showInformationMessage(
              "An empty line will be added to the document " +
                currentDocument.fileName
            );
          }
        }
      }

      // Check if a language configuration is changed for a text document
      if (
        e.affectsConfiguration(
          "conf.language.showSize",
          vscode.window.activeTextEditor?.document
        )
      ) {
        // noop
      }

      // Check if a language configuration is changed for a language
      if (
        e.affectsConfiguration("conf.language.showSize", {
          languageId: "typescript",
        })
      ) {
        // noop
      }
    })
  );
}
