/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Box from "@oxygen-ui/react/Box";
import Code from "@oxygen-ui/react/Code";
import IconButton from "@oxygen-ui/react/IconButton";
import InputAdornment from "@oxygen-ui/react/InputAdornment";
import Skeleton from "@oxygen-ui/react/Skeleton";
import Tooltip from "@oxygen-ui/react/Tooltip";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { FinalForm, FinalFormField, FormRenderProps, FormSpy, FormState, TextFieldAdapter } from "@wso2is/form";
import { Hint } from "@wso2is/react-components";
import cloneDeep from "lodash-es/cloneDeep";
import orderBy from "lodash-es/orderBy";
import React, { FunctionComponent, ReactElement, SVGAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";

/**
 * Prop types for the text customization fields component.
 */
export type CreateConsoleRoleWizardBasicInfoFormProps = IdentifiableComponentInterface;

/**
 * Text customization fields component.
 *
 * @param props - Props injected to the component.
 * @returns Text customization fields component.
 */
const CreateConsoleRoleWizardBasicInfoForm: FunctionComponent<CreateConsoleRoleWizardBasicInfoFormProps> = (
    props: CreateConsoleRoleWizardBasicInfoFormProps
): ReactElement => {
    const { "data-componentid": componentId } = props;

    const { t } = useTranslation();

    return (
        <FinalFormField
            fullWidth
            FormControlProps={ {
                margin: "dense"
            } }
            ariaLabel="Role name field"
            required={ true }
            data-componentid={ `${componentId}-form-role-name-field` }
            name="displayName"
            type="text"
            label={ "Role Name" }
            helperText={ (
                <Hint>
                    Provide a distinctive and meaningful display name for the role. This name should clearly represent
                    the purpose or responsibilities associated with this role within the Console application. E.g.{ " " }
                    <Code>application:read</Code>
                </Hint>
            ) }
            placeholder="Enter Role name"
            component={ TextFieldAdapter }
        />
    );
};

/**
 * Default props for the component.
 */
CreateConsoleRoleWizardBasicInfoForm.defaultProps = {
    "data-componentid": "create-console-role-wizard-basic-info-form"
};

export default CreateConsoleRoleWizardBasicInfoForm;
