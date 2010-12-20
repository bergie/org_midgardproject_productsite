<?php
/**
 * @package org_midgardproject_productsite
 * @author The Midgard Project, http://www.midgard-project.org
 * @copyright The Midgard Project, http://www.midgard-project.org
 * @license http://www.gnu.org/licenses/lgpl.html GNU Lesser General Public License
 */

/**
 * Midgard MVC administrative interface
 *
 * @package org_midgardproject_productsite
 */
class org_midgardproject_productsite_injector
{
    public function inject_template(midgardmvc_core_request $request)
    {
        // We inject the process only to register our own URL handlers
        $request->add_component_to_chain(midgardmvc_core::get_instance()->component->get('org_midgardproject_productsite'), true);

        if (midgardmvc_core::get_instance()->context->get_current_context() == 0)
        {
            // Root request
            if ($request->get_path() == '/')
            {
                $route = $request->get_route();
                $route->template_aliases['content'] = 'omp-show-frontpage';
            }
        }
    }
}
?>
